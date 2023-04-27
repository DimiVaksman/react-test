import { MaterialCard } from "../MaterialCard/MaterialCard";

export const MaterialsList = ({ items, ...otherProps}) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
<MaterialCard item={item} {...otherProps}/>
          </li>
      ))}
    </ul>
  );
};
