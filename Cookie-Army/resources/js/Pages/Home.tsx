import SidebarLeft from "@/Components/SidebarLeft";
import SidebarRight from "@/Components/SidebarRight";
import { Layout } from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";

export default function Home() {
    return (
        <Layout>
            <Head title="Home" />
            <SidebarLeft />
            <Layout.MainContent />
            <SidebarRight />
        </Layout>
    );
}
