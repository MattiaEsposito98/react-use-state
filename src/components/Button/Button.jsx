import languages from "../../assets/languages";
import style from './Button.module.css'


export default function Button() {
  return (
    <div>
      {
        languages.map((name) =>
          <button className={style.button} key={name.id}>
            {name.title}
          </button>
        )
      }
    </div>
  )
}