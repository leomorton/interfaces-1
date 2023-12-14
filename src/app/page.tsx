import Image from "next/image";
import GlowButton from "./components/GlowButton";

export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-12">
                <GlowButton text="INTERFACE" delay1={"delay-75"} time1={"duration-1000"} delay2={"delay-75"} time2={"duration-1000"} />
            </main>
        </>
    );
}
