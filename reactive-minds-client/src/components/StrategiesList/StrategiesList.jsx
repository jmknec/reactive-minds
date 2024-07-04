import Strategy from "../Strategy/Strategy";
import "./StrategiesList.scss";

export default function StrategiesList({ userStrategies }) {
  return (
    <div>
      <div className="user-strategies">
        {userStrategies.map((strategy, index) => {
          return (
            <Strategy
              key={index}
              id={strategy.id}
              strategy={strategy}
            ></Strategy>
          );
        })}
      </div>
    </div>
  );
}
