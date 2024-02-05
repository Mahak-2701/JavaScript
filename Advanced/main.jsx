module.exports = {};
export default async function Module() {
    const res = await fetch("site::8080");
    return (
        <>
            Click here to win money
        </>
    );
}