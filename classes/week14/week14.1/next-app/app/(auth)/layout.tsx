export default function ({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="border-b p-1 flex justify-center items-center">
                This quote goes for both the signup and signin pages
            </div>
            {children}
        </div>
    );
}
