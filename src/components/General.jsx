import '../styles/General.css'

function General() {

    return (
        <div className="general-info">
            <form>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"

                        />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"

                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="tel"
                        name="phone"

                    />
                </label>
                <button type="button">
                    Submit
                </button>
            </form>

            <div>
                <p>Name: </p>
                <p>Email: </p>
                <p>Phone: </p>
                <button>Edit</button>
            </div>
        </div>
    )
}

export default General;