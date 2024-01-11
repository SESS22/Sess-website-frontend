
const SectionItem = ({ itemTypeClass,itemName, paragraphDetails }) => {
    return (
        <div className={`${itemTypeClass}`}>
            <div className={`${itemName} agenda-photo`}></div>
            <p>{paragraphDetails.paragraph} {itemTypeClass==="partner-item"?<a href={paragraphDetails.link}>learn more...</a>:null}</p>
        </div>)
}

export default SectionItem