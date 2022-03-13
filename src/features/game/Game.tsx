import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { RootState } from "../../app/store";
import { tick, addUnits, reset } from "./gameSlice";
import styles from './Game.module.css';
import { Rates, units } from "./Units";

export function Game() {
    const money = useSelector((state: RootState) => state.game.money);
    const earnRate = useSelector((state: RootState) => state.game.incrementRate);
    const ownedUnits = useSelector((state: RootState) => state.game.units);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const interval = setInterval(() => dispatch(tick()), 100);
        return () => {
            clearInterval(interval);
        };
    }, [dispatch]);

    return (
        <div>
            <div>
                <span>{money.toFixed(0)}</span>
                <button
                    onClick={() => dispatch(reset())}>
                    Reset
                </button>
            </div>
            <button
                onClick={() => {
                    if (money >= 1200) {
                        const draw = Math.random();
                        let culumativeRate = 0;
                        for (const [k, v] of Object.entries(units)) {
                            culumativeRate += Rates[k];
                            if (draw < culumativeRate) {
                                dispatch(
                                    addUnits({
                                        newUnits: {
                                            [k]: 1,
                                        },
                                        incrementRate: v.incrementRate
                                    })
                                );
                                break;
                            }
                        }
 
                    }
                }}>
                Draw
            </button>
            <span>Earn Rate: {earnRate*10}</span>
            <div className={styles.gridContainer}>
                {Object.entries(units).map(([k, _v]) => 
                    <div 
                        key={k}
                        className={styles.gridItem}>
                        {ownedUnits[k] !== undefined ? (<div><div>{k}</div><div>{ownedUnits[k]}</div></div>) : (<div><div>?</div><div>0</div></div>)}
                    </div>
                )}
            </div>
        </div>
    );
}