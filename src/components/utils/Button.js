import react, {useState} from 'react';

export const ButtonPpc = (props) =>{
    const [isLoading, setIsLoading] = useState(false);

    return ( <div>
        <button className={props.classNameBtn} onClick={props.click}>{props.btnText}
            {
                props.isLoading && props.isLoading === true && <div class="spinner-border text-secondary" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
            }

        </button>
    </div>)
}