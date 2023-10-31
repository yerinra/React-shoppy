const ErrorPage = () => {
  return (
    <div className="flex-column items-center mt-20">
      <div className="flex justify-center text-shoppyAccent font-sans text-7xl font-extrabold underline decoration-dotted">
        Oops! Wrong Path!
      </div>
      <div className="flex justify-center text-shoppyBlack font-sans mt-5">
        Please try again with valid path.
      </div>
    </div>
  );
};

export default ErrorPage;
