class LoginForm extends React.Component {
  constructor (props) {
    super (props);
    this.state = { email: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({email:event.target.value});
  }

  handleSubmit (event) {
    event.preventDefault();
    const { email } = this.state;
    console.log(`form submitted\nemail: ${email}`);
  }

  render () {
    const { email } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" vaule={email} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="submit"/>
      </form>
    )
  }
}