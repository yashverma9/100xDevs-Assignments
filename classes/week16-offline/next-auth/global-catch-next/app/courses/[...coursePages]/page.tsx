export default async function Course(args: {
    params: { coursePages: string[] };
}) {
    const params = await args.params;
    const coursePages = params.coursePages; // To extract the route where you are in the global catch scenario
    return (
        <div>
            Hi this is a global catch to all /courses/...routes ..... currently
            you reached{" "}
            {coursePages.map((route, index) => (
                <p key={index}>{route}</p>
            ))}
        </div>
    );
}
