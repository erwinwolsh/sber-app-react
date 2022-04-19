function SignIn() {
  return (
    <div className="container">
      <form
        className="d-flex flex-column align-items-center container form-wrapper"
        method="POST"
        action="/auth/signin"
      >
        <input
          className="mb-3 form-control"
          name="email"
          placeholder="email"
          type="email"
        />
        <input
          className="mb-3 form-control"
          name="password"
          placeholder="password"
          type="password"
        />
        <button className="btn btn-primary">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
