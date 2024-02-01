class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      biography: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    // extract name and value attribute from element

    this.setState({
      [name]: value // ES6 object computed property name
    });
  }

  handleSubmit(event) {
    event.preventDefault(); // prevents default page change behavior
    const { email, password, biography } = this.state;
    console.log(`form submitted\nemail: ${email}\npassword: ${password}\nbiography: ${biography}`);
  }

  render() {
    const {
      email,
      password,
      biography
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={this.handleChange} />
        </label>
        <label>
          Biography:
          <textarea name="biography" value={biography} onChange={this.handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}