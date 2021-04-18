import refs from './refs';

export default
    function loader() {
        refs.card.innerHTML = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;
    };