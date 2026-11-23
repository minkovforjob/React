import { useState } from 'react';
function Answer({ updatePoints }) {
    const [rezultUser, setRezultUser] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        updatePoints(Number(rezultUser));
        setRezultUser("");

    }

    function handleChange(event) {
        setRezultUser(event.target.value);
        console.log(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="введите ответ"
                name="Rezult"
                value={rezultUser}
                onChange={handleChange}
            />
            <button type='submit'>ok</button>
            {/* updatePoints(rezultUser); */}
        </form>);
}
export default Answer;