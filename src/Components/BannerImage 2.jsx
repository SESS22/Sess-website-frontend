const BannerImage = ({ customClass,bannerHeading,bannerContent }) => {
    return (
        <div className={`${customClass}`}>
            <div className="bannerContainer">
                <span className="bannerHeading">{bannerHeading}</span>
                <div className="bannerContent">{bannerContent}</div>
            </div>
            
        </div>
    )
}

export default BannerImage