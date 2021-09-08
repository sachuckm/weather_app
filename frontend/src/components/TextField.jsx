import "../styles/textfield.css";

const TextField = ({ handleChange, city, placeholder }) => {
  return (
    <div class="input-group">
      <input
        onChange={handleChange}
        placeholder={placeholder}
        value={city}
        class="form-control"
        type="text"
        name="text-1542372332072"
        id="text-1542372332072"
        required="required"
      />
      <label for="text-1542372332072"></label>
      <div class="req-mark">Enter City or Pincode </div>
    </div>
  );
};

export default TextField;
