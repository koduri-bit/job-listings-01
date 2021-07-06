import classes from './SelectedTags.module.css';



const SelectedTags = (props) =>{


    const tagToClose = ( event) =>{
        event.preventDefault();

        props.tagUserClickedToRemoveAJobFromFilter(event.target.innerText)

    }

    const filterTags = props.languageTagToShowInFilter.map( (tag , index)=> {
        return <span
                key={index}
                className={ classes.tag  }
                onClick={tagToClose}
                >

                    {tag}
               </span>


    })
    return (
        <div className={classes.jobtag}>
            {filterTags}
            <button
                className={classes.clearbtn}
                onClick={props.clearAllTagsFromFilter}>Clear</button>
        </div>
    )
}

export default SelectedTags