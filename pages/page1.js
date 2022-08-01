import Link from "next/link";

export default function Page1() {
  return (
    <>
      <h1>Page 1</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
