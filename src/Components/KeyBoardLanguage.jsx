import { FaKeyboard } from "react-icons/fa";
import "./KeyBoardStylee.css";

function KeyBoardLanguage(props) {
  const setLanguage = props.setLanguage;
  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    switch (selectedLanguage) {
      case "hebrew":
        setLanguage("hebrew");
        break;
      case "arabic":
        let text = "אשר שאתה שונא בדם ליבך את חמאס!!!";
        if (window.confirm(text) === true) {
          setLanguage("arabic");
        } else {
          alert("!אין לך זכות להשתמש במקלדת");
          setLanguage("hebrew");
        }
        break;
      case "english":
        setLanguage("english");
        break;
      case "russian":
        setLanguage("russian");
        break;
      case "ukranian":
        setLanguage("ukranian");
        break;
      case "portuguese":
        setLanguage("portuguese");
        break;
      case "spanish":
        setLanguage("spanish");
        break;
      case "macedonian":
        setLanguage("macedonian");
        break;
      default:
        setLanguage([]);
    }
  };
//   const iconSize = window.innerWidth > 768 ? "35px" : "20px";
  return (
    <div className="language-and-icons">
      <select className="chooseLanguage" onChange={handleChange}>
        <option value="english">English</option>
        <option value="hebrew">עברית</option>
        <option value="arabic">عربيه</option>
        <option value="ukranian">українська</option>
        <option value="russian">русский</option>
        <option value="portuguese">Português</option>
        <option value="spanish">Español</option>
        <option value="macedonian">Македонски</option>
      </select>
      {props.isEmojiActive ? (
        <FaKeyboard
          className="icon"
          id="keyboard-icon"
          onClick={props.changeState}
        //   style={{
        //     fontSize: iconSize,
        //     cursor: "pointer",
        //     marginLeft: '8px'
        //   }}
        />
      ) : (
        <button className="icon" onClick={props.changeState}>
          <img src="\src\images\emoji_button_tiny.webp" alt="Emoji Keyboard" />
        </button>
      )}
    </div>
  );
}

export default KeyBoardLanguage;
