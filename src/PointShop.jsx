import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'

export function PointShop({points, setPoints}) {
    const handlePointsChange = (event) => {
        setPoints(event.target.value)
    }

    return (
        <>
            <div className="row ps-3 pt-3">
                <div className="col">
                    <img src="src/assets/popcorn.jpg"/>
                    <div>
                        1x Gratis Popcorn
                    </div>
                </div>
                <div className="col ps-3" >
                    <img src="src/assets/drink.jpg"/>
                    <div>
                        1x Gratis Getränk
                    </div>
                </div>
                <div className="col ps-3">
                    <img src="src/assets/ticket.jpg"/>
                    <div>
                        1x Gratis Ticket
                    </div>
                </div>
            </div>
        </>
    );
}