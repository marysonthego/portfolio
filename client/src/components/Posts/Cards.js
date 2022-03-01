import react from "React";
import "components/css/cards.scss";

export function Cards(TopPic, Title, Section1) {
  return (
    <container class="grid">
      <div></div>
          <card >
            <img class="card-img-top" src="media/amazon.png" alt="Card image" />
              <h4 class="card-title text-center">John Doe</h4>
              <p class="card-text">Some example text.</p>
              <a href="#" class="btn btn-primary">
                See Profile
              </a>
            </card>
            <div></div>
    </container>
  );
}
