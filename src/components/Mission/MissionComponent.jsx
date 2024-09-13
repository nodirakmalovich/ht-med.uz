import './ui/MissionComponent.scss'


export default function MissionComponent({title, description}) {
    return (
        <div className="MissionComponent">
            <p className="MissionComponent_text">
                {title}
            </p>
            <p className="MissionComponent_description">
                {description}
            </p>
        </div>
    )
}