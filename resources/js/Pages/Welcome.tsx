import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ }: PageProps<{}>) {
    return (
        <>
            <Head title="Welcome" />
            <div>Welcome</div>
        </>
    )
}