import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@mui/material';

export default function Welcome({ }: PageProps<{}>) {
    return (
        <>
            <Head title="Welcome" />
            <div>Welcome</div>
            <Button variant="contained">Test Button</Button>
        </>
    )
}