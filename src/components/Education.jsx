import '../styles/Education.css'

function Education() {

    return (
        <div className="education">
            <form>
                <label>
                    School Name:
                    <input
                        type="text"
                        name="school"
                        />
                </label>
                <label>
                    Title of Study:
                    <input
                        type="text"
                        name="school"
                    />
                </label>
                <label>
                    Date:
                    <input
                        type="text"
                        name="school"
                    />
                </label>
                <button type="button">
                    Submit
                </button>
            </form>
            <div>
                <p>School: </p>
                <p>Title: </p>
                <p>Date: </p>
                <button>Edit</button>
            </div>
        </div>
    )
}

export default Education;