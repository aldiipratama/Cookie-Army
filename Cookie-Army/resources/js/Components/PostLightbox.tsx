import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { FiHeart, FiSend } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import Image from "./Image";
import { Comment, Like, User } from "@/types";
import { usePage } from "@inertiajs/react";
import { TruncatedText } from "./TruncateText";

const PostLightbox = ({
    imageProfile = "https://placehold.co/50",
    userName,
    nameUser,
    image,
    open,
    onOpenChange,
    comments,
    userComments,
    likeComment,
}: {
    imageProfile?: string;
    nameUser?: string;
    userName?: string;
    image?: string;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    comments?: Comment[];
    userComments?: User[];
    likeComment?: Like[];
}) => {
    const { auth } = usePage().props;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTitle className="sr-only">Lightbox</DialogTitle>
            <DialogContent className="bg-transparent max-md:h-screen p-0 max-w-screen-lg z-[999] h-[calc(100vh-10%)] border-none rounded-lg overflow-hidden">
                <div className="flex">
                    <div className="flex items-center justify-center flex-1 bg-accent max-md:hidden">
                        <Image
                            src={image}
                            alt={image}
                            className="max-h-[690px] w-full"
                            variant="post"
                        />
                    </div>
                    <div
                        className={cn(
                            "flex-1 flex flex-col bg-background p-5",
                            auth.user && "justify-between"
                        )}
                    >
                        <div className="flex items-center gap-2 pb-2 border-b border-accent-foreground">
                            <div className="flex-1 max-w-max">
                                <Image
                                    src={imageProfile}
                                    alt={imageProfile}
                                    variant="profile"
                                    cursor="yes"
                                />
                            </div>
                            <Button
                                variant={"link"}
                                className="flex flex-col flex-1 gap-0 p-0 hover:no-underline max-w-max"
                            >
                                <span className="text-lg hover:underline">
                                    {nameUser}
                                </span>
                                <span className="text-sm hover:underline">
                                    @{userName}
                                </span>
                            </Button>
                        </div>
                        <div
                            className={cn(
                                "flex flex-col gap-4 p-5 pb-1 overflow-y-scroll  custom-scrollbar",
                                auth.user
                                    ? "h-[480px] max-md:h-[540px]"
                                    : "h-[600px]"
                            )}
                        >
                            {comments?.map((comment) => {
                                const commentCount = comments?.length;
                                const like = likeComment?.filter(
                                    (like) => like.comment_id === comment?.id
                                ).length;

                                return commentCount > 0 ? (
                                    userComments
                                        ?.filter(
                                            (user) =>
                                                user.id === comment.user_id
                                        )
                                        .map((userComment) => (
                                            <>
                                                <div
                                                    className={cn(
                                                        "flex flex-col gap-4"
                                                    )}
                                                >
                                                    <div className="flex items-center">
                                                        <div className="flex gap-2">
                                                            <Image
                                                                src={
                                                                    userComment?.profile_picture
                                                                }
                                                                alt={
                                                                    userComment?.profile_picture
                                                                }
                                                                variant="profile"
                                                                cursor="yes"
                                                            />
                                                            <div className="flex flex-col">
                                                                <Button
                                                                    variant={
                                                                        "link"
                                                                    }
                                                                    className="p-0 text-xl font-bold max-w-max"
                                                                >
                                                                    {`${userComment?.first_name} ${userComment?.last_name}`}
                                                                </Button>
                                                                <TruncatedText
                                                                    lines={3}
                                                                    className={cn(
                                                                        "text-xs text-muted-foreground"
                                                                    )}
                                                                >
                                                                    {
                                                                        comment?.description
                                                                    }
                                                                </TruncatedText>
                                                                <Button
                                                                    variant={
                                                                        "link"
                                                                    }
                                                                    className="p-0 max-w-max"
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
                                                            {like} Likes
                                                        </Button>
                                                    </div>
                                                </div>
                                            </>
                                        ))
                                ) : (
                                    <p>Belum ada komentar</p>
                                );
                            })}
                        </div>
                        {auth.user && (
                            <div className="flex items-center gap-2">
                                <Image
                                    src={auth.user?.profile_picture}
                                    alt={auth.user?.profile_picture}
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
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PostLightbox;
