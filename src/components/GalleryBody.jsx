export default function (props) {
  return (
    <div>
      <div>
        {props.data.map((image) => {
          return (
            <div key={image.id} className="column">
              <img src={image.img} alt=""></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
