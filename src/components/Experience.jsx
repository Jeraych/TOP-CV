import '../styles/Experience.css'

function Experience() {

    return (
        <div className="experience">
            <form>
                <label>
                    Company:
                    <input
                        type="text"
                        name="company"
                    />
                </label>
                <label>
                    Position:
                    <input
                        type="text"
                        name="position"
                    />
                </label>
                <label>
                    Responsibilities:
                    <input
                        type="text"
                        name="responsibilities"
                    />
                </label>
                <label>
                    From:
                    <input
                        type="text"
                        name="from"
                    />
                </label>
                <label>
                    To:
                    <input
                        type="text"
                        name="to"
                    />
                </label>
                <button type="button">
                    Submit
                </button>
            </form>
            <div>
                <p>Company: </p>
                <p>Position: </p>
                <p>Responsibilities: </p>
                <p>From: </p>
                <p>To: </p>
                <button>Edit</button>
            </div>
        </div>
    );
}

export default Experience;