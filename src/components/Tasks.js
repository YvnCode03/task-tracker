
const task = [
	{
		id: 1, 
		text: 'Doctors Appointment',
		day: 'Feb 5th at 2:30pm', 
		reminder: true, 
	}, 
	{
		id: 2, 
		text: 'Meeting at School', 
		day: 'Feb 6th at 1:30pm',
		reminder: true, 
	}, 
	{
		id: 3, 
		text: 'Feb 5th at 2:30pm', 
		reminder: false, 
	}

]
const Tasks = () => {
	return (
		<>
			{Tasks.map((task) =>(
				<h3>{task.text}</h3>
			))}
		</>
	)
}
export default Tasks