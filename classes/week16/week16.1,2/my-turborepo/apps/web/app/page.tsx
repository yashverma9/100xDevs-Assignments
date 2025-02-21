import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div>
            <Button appName="Web Name">Hi There</Button>
        </div>
    );
}
