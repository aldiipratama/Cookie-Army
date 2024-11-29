import { ReactNode, useEffect, useState } from "react";
import PostLightbox from "@/Components/PostLightbox";
import {
    FiArrowUpCircle,
    FiHeart,
    FiMessageSquare,
    FiMusic,
    FiSend,
} from "react-icons/fi";
import { cn } from "@/lib/utils";
import { animateScroll, Button as Btn } from "react-scroll";
import Navbar from "@/Components/Navbar";
import { LoadingPost } from "@/Components/LoadingPost";
import Spinner from "@/Components/Spinner";
import { usePage } from "@inertiajs/react";
import { useFetchPosts } from "@/hooks/features/posts/useFetchPosts";
import { useFetchUsers } from "@/hooks/features/users/useFetchUsers";
import { useFetchLikes } from "@/hooks/features/likes/useFetchLikes";
import { useFetchComments } from "@/hooks/features/comments/useFetchComments";
import { useFetchSharePosts } from "@/hooks/features/sharePosts/useFetchSharePosts";
import { Button } from "@/Components/ui/button";
import Image from "@/Components/Image";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import { TruncatedText } from "@/Components/TruncateText";

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navbar />
            <div className="container max-md:px-5">
                <main className="grid grid-cols-12 gap-4 mt-5">{children}</main>
            </div>
        </>
    );
};

Layout.MainContent = () => {
    const { auth } = usePage().props;

    const [activePostId, setActivePostId] = useState<number | null>(null);
    const [isOpenLightbox, setIsOpenLightbox] = useState(false);
    const [showGoToUp, setShowGoToUp] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);

    const {
        data: dataPosts,
        isLoading: loadingPosts,
        isFetching: fetchingPosts,
        fetchNextPage,
    } = useFetchPosts();
    const {
        data: dataUsers,
        isLoading: loadingUsers,
        isFetching: fetchingUsers,
    } = useFetchUsers();
    const {
        data: dataLikes,
        isLoading: loadingLikes,
        isFetching: fetchingLikes,
    } = useFetchLikes();
    const {
        data: dataComments,
        isLoading: loadingComments,
        isFetching: fetchingComments,
    } = useFetchComments();
    const {
        data: dataSharePosts,
        isLoading: loadingSharePosts,
        isFetching: fetchingSharePosts,
    } = useFetchSharePosts();

    useEffect(() => {
        const handleScroll = async () => {
            const scrollY = window.scrollY;
            const innerHeight = window.innerHeight;
            const scrollHeight = document.documentElement.scrollHeight;

            if (
                scrollY + innerHeight >= scrollHeight - 200 &&
                !loadingPosts &&
                !fetchingPosts
            ) {
                setIsAtBottom(true);
                fetchNextPage();
            }

            scrollY > 300 ? setShowGoToUp(true) : setShowGoToUp(false);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loadingPosts, fetchingPosts, fetchNextPage, isAtBottom]);

    const handleClickOpenLightbox = (postId: number) => {
        setActivePostId(postId);
        setIsOpenLightbox(true);
    };

    return (
        <div className="flex flex-col col-span-6 gap-4 max-md:col-span-12">
            <div className="flex flex-col gap-8 pb-5">
                {loadingPosts ? (
                    <>
                        <LoadingPost />
                        <LoadingPost />
                    </>
                ) : (
                    dataPosts?.pages.map((page) =>
                        page.posts.data.map((post) => {
                            const userPost = dataUsers?.users.find(
                                (user) => user.id === post.user_id
                            );
                            const likePost = dataLikes?.likes.filter(
                                (like) => like.post_id === post.id
                            ).length;
                            const comment = dataComments?.comments.find(
                                (comment) => comment.post_id === post.id
                            );
                            const commentCount =
                                dataComments?.comments.filter(
                                    (comment) => comment.post_id === post.id
                                ).length || 0;
                            const likeComment = dataLikes?.likes.filter(
                                (like) => like.comment_id === comment?.id
                            ).length;
                            const userComment = dataUsers?.users.find(
                                (user) => user.id === comment?.user_id
                            );
                            const sharePosts =
                                dataSharePosts?.sharePosts.filter(
                                    (share) => share.post_id === post.id
                                ).length;
                            const comments = dataComments?.comments.filter(
                                (comment) => comment.post_id === activePostId
                            );
                            const postActive = dataPosts?.pages
                                .find((post) =>
                                    post?.posts.data.some(
                                        (post) => post.id === activePostId
                                    )
                                )
                                ?.posts.data.find(
                                    (post) => post.id === activePostId
                                );
                            const user = dataUsers?.users.find(
                                (user) => user.id === postActive?.user_id
                            );

                            return (
                                <>
                                    <div
                                        key={post.id}
                                        className="flex flex-col gap-4 p-5 rounded-lg bg-accent"
                                    >
                                        <Button
                                            variant={"ghost"}
                                            className="flex items-center self-start gap-2 p-0 max-w-max"
                                        >
                                            <Image
                                                src={userPost?.profile_picture}
                                                alt={userPost?.profile_picture}
                                                variant="profile"
                                            />
                                            <div className="flex flex-col items-start gap-0">
                                                <span className="text-sm text-gray-500">
                                                    @{userPost?.username}
                                                </span>
                                                <span className="text-lg hover:underline">
                                                    {`${userPost?.first_name} ${userPost?.last_name}`}
                                                </span>
                                            </div>
                                        </Button>
                                        <p className="text-sm">
                                            {post.description}
                                        </p>
                                        <div className="flex items-center justify-center">
                                            <Image
                                                src={post.image}
                                                alt={post.image}
                                                variant="post"
                                                cursor="yes"
                                                onClick={() =>
                                                    handleClickOpenLightbox(
                                                        post.id
                                                    )
                                                }
                                            />
                                        </div>
                                        <Button
                                            variant={"link"}
                                            className="flex items-center justify-start gap-2 text-sm max-w-max"
                                        >
                                            <FiMusic /> musik title - artist
                                        </Button>
                                        <div className="flex">
                                            <div className="flex gap-4">
                                                <Button
                                                    variant={"link"}
                                                    className="flex items-center gap-2"
                                                >
                                                    <FiHeart /> {likePost} likes
                                                </Button>
                                                <Button
                                                    variant={"link"}
                                                    className="flex items-center gap-2"
                                                    onClick={() =>
                                                        handleClickOpenLightbox(
                                                            post.id
                                                        )
                                                    }
                                                >
                                                    <FiMessageSquare />{" "}
                                                    {commentCount} comments
                                                </Button>
                                                <Button
                                                    variant={"link"}
                                                    className="flex items-center gap-2"
                                                >
                                                    <FiSend /> {sharePosts}{" "}
                                                    shares
                                                </Button>
                                            </div>
                                        </div>
                                        {commentCount > 0 ? (
                                            <div
                                                className={cn(
                                                    "flex flex-col gap-4 p-5 pb-1 border-y dark:border-white"
                                                )}
                                            >
                                                <div
                                                    className={cn(
                                                        "flex flex-col gap-4"
                                                    )}
                                                >
                                                    <div className="flex justify-between">
                                                        <div className="flex self-start gap-2">
                                                            <Image
                                                                src={
                                                                    userComment?.profile_picture
                                                                }
                                                                alt={
                                                                    userComment?.profile_picture
                                                                }
                                                                variant="profile"
                                                                className="max-md:size-8"
                                                            />
                                                            <div className="flex flex-col">
                                                                <span className="text-xl font-bold">
                                                                    {`${userComment?.first_name} ${userComment?.last_name}`}
                                                                </span>
                                                                <div className="flex flex-col gap-0">
                                                                    <TruncatedText
                                                                        lines={
                                                                            3
                                                                        }
                                                                        className={cn(
                                                                            "text-xs text-muted-foreground"
                                                                        )}
                                                                    >
                                                                        {
                                                                            comment?.description
                                                                        }
                                                                    </TruncatedText>
                                                                </div>
                                                                <Button
                                                                    variant={
                                                                        "link"
                                                                    }
                                                                    className="p-0 max-w-max max-md:text-xs"
                                                                >
                                                                    Reply
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <Button
                                                            variant={"link"}
                                                        >
                                                            <FiHeart
                                                            // className={cn(likes && "text-red-500 fill-red-500")}
                                                            />{" "}
                                                            {likeComment} Likes
                                                        </Button>
                                                    </div>
                                                </div>
                                                <Button
                                                    variant={"link"}
                                                    onClick={() =>
                                                        handleClickOpenLightbox(
                                                            post.id
                                                        )
                                                    }
                                                >
                                                    See more...
                                                </Button>
                                            </div>
                                        ) : null}
                                        {auth.user && (
                                            <div className="flex items-center gap-2">
                                                <Image
                                                    src={
                                                        auth.user
                                                            ?.profile_picture
                                                    }
                                                    alt={
                                                        auth.user
                                                            ?.profile_picture
                                                    }
                                                    variant="profile"
                                                />
                                                <Label className="relative w-full">
                                                    <Textarea
                                                        placeholder="Write your comment..."
                                                        className="p-5 pr-12 resize-none min-h-24 bg-background custom-scrollbar"
                                                    />
                                                    <Button
                                                        variant={"ghost"}
                                                        size={"icon"}
                                                        className="absolute -translate-y-1/2 right-2 top-6"
                                                    >
                                                        <FiSend />
                                                    </Button>
                                                </Label>
                                            </div>
                                        )}
                                        <PostLightbox
                                            comments={comments}
                                            image={post.image}
                                            open={isOpenLightbox}
                                            onOpenChange={(isOpen) => {
                                                setIsOpenLightbox(isOpen);
                                                if (!isOpen)
                                                    setActivePostId(null);
                                            }}
                                            likeComment={dataLikes?.likes}
                                            nameUser={`${user?.first_name} ${user?.last_name}`}
                                            userName={user?.username}
                                            userComments={dataUsers?.users}
                                            imageProfile={user?.profile_picture}
                                        />
                                    </div>
                                </>
                            );
                        })
                    )
                )}
                {isAtBottom && fetchingPosts && (
                    <Spinner className="self-center" />
                )}
            </div>

            {showGoToUp && (
                <Btn
                    to="top"
                    smooth={true}
                    spy={true}
                    onClick={animateScroll.scrollToTop}
                    className={cn(
                        "rounded-full right-5 transition-all ease-in-out",
                        showGoToUp ? "bottom-5 fixed" : "-bottom-full relative"
                    )}
                >
                    <FiArrowUpCircle className="!w-10 !h-10" />
                </Btn>
            )}
        </div>
    );
};
