function Video({ video, title }) {
    return (
        <div>
            <iframe className="lg:w-[700px] controls aspect-video " src={video}></iframe>
            <h2 className="text-white text-3xl font-bold my-5">{title}</h2>
        </div>
    );
}

export default Video;