const TaskDescription = (props) => {
  return (
    <>
      {props.both ? (
        <div className="assignment1">
          <h2>Assignment:</h2>
          <p>
            {" "}
            <strong>Part 01: </strong>Create the table UI with different input
            types (Text, Link, Image + Text, Date) and apply sort functionality
            to the column{" "}
          </p>
        </div>
      ) : (
        <div className="assignment1">
          {!props.anyone ? (
            <h1>No table is displayed</h1>
          ) : (
            <div>
              {props.option_one ? (
                <h1>Condition Rendering First Part</h1>
              ) : (
                <h2>Condition Rendering Second Part</h2>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TaskDescription;
