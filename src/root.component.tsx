// import { ReactComponent as Bug } from './assets/bug.svg';
import Bug from './assets/bug.svg';

export default function Root(props) {
  return (
    <section>
      <Bug />
      {props.name} is mounted!</section>
    );
}
