import { increment, decrement } from "../redux/counterSlice";
import { useSelector, useDispatch } from "react-redux";


function Example() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="bg-red-500">
            <p className="mb-3">Conteggio: {count}</p>
            <button
                className="mr-3"
                aria-label="Incremente value"
                onClick={() => dispatch(increment())}>Incrementa +
            </button>
            <button
                className="mr-3"
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}>Decrementa -
            </button>
        </div>
    );
}

export default Example;