import style from './Form.module.css'
export const Form =()=>{
    const  count = 1
    const  name = 'geek'
    return <form className={style.form}>
        <p>Count df: {count}</p>

        <button type={"button"}>click</button>
        <hr/>
        <p>Name: {name}</p>
    </form>
}