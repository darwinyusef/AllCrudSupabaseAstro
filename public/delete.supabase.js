import { supabase } from './supabase';

let elementos = document.getElementsByClassName('del')
for (let el of elementos) {
    el.addEventListener("click", deleteId, false);
}

async function deleteId(event) {
    event.preventDefault();
    const { error } = await supabase
        .from('user')
        .delete()
        .eq('id', event.target.dataset['id']);


    location.reload()
}
