class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      biography: '',
      age: '<20',
      subscribe: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, type } = event.target;
    let value;

    switch (type) {
      case 'checkbox':
        value = event.target.checked;
        break;
        default:
          value = event.target.value;
    }

    this.setState({
      [name]: value // ES6 object computed property name
    });
  }

  handleSubmit(event) {
    event.preventDefault(); // prevents default page change behavior
    const { email, password, biography } = this.state;
    console.log(`form submitted\nemail: ${email}\npassword: ${password}\nbiography: ${biography}\nage: ${age}\nsubscribe: ${subscribe}`);
  }

  render() {
    const {
      email,
      password,
      biography,
      age,
      subscribe
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
        <label>
          Age:
          <select name="age" value={age} onChange={this.handleChange}>
          <option value="<20">20 or younger</option>
          <option value="<21-30">21 to 30</option>
          <option value="<31-40">31 to 40</option>
          <option value="<41-50">41 to 50</option>
          <option value="<51">51 or older</option>
          </select>
        </label>
        <label>
          Subscribe to newsletter:
          <input name="subscribe" type="checkbox" checked={subscribe} onChange={this.handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<SignupForm/>);