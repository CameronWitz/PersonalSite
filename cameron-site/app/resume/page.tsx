export default function ResumeViewer() {
  return (
    <>
      <div
        className="flex mt-6 justify-start min-w-full"
        style={{
          height: "100vh",
        }}
      >
        <object
          data="/uploads/CameronWitzResume.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>
            Unable to display resume.{" "}
            <a href="/uploads/CameronWitzResume.pdf">Download</a> instead.
          </p>
        </object>
      </div>
    </>
  );
}
