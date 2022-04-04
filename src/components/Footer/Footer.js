const Footer = ({ clearPosts }) => {
  return (
    <footer className="d-flex my-5 justify-content-center">
      <button onClick={clearPosts} type="button" className="btn btn-danger">
        Delete All
      </button>
    </footer>
  );
};

export default Footer;
