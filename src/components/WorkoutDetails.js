import { Workout } from "./Workout";
export function WorkoutDetails() {
  const weight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="weight-emoji"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M48 256h416"
      />
      <rect
        x="384"
        y="128"
        width="32"
        height="256"
        rx="16"
        ry="16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <rect
        x="96"
        y="128"
        width="32"
        height="256"
        rx="16"
        ry="16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <rect
        x="32"
        y="192"
        width="16"
        height="128"
        rx="8"
        ry="8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <rect
        x="464"
        y="192"
        width="16"
        height="128"
        rx="8"
        ry="8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
  return (
    <div className="workout-details">
      <div className="workout-details-heading">
        {weight}
        <h2 className="saved-workouts-title">Saved Workouts</h2>
        {weight}
      </div>
      <Workout
        lightOrDark="light"
        workoutData={{
          name: "Clean from Blocks",
          type: "olympic_weightlifting",
          muscle: "quadriceps",
          equipment: "barbell",
          difficulty: "beginner",
          instructions:
            "With a barbell on boxes or stands of the desired height, take an overhand or hook grip just outside the legs. Lower your hips with the weight focused on the heels, back straight, head facing forward, chest up, with your shoulders just in front of the bar. This will be your starting position. Begin the first pull by driving through the heels, extending your knees. Your back angle should stay the same, and your arms should remain straight with the elbows pointed out. Next comes the second pull, the main source of acceleration for the clean. As the bar approaches the mid-thigh position, begin extending through the hips. In a jumping motion, accelerate by extending the hips, knees, and ankles, using speed to move the bar upward. There should be no need to actively pull through the arms to accelerate the weight. At the end of the second pull, the body should be fully extended, leaning slightly back, with the arms still extended.3.  As full extension is achieved, transition into the receiving position by aggressively shrugging and flexing the arms with the elbows up and out. Aggressively pull yourself down, rotating your elbows under the bar as you do so. Receive the bar in a front squat position, the depth of which is dependent upon the height of the bar at the end of the third pull. The bar should be racked onto the protracted shoulders, lightly touching the throat with the hands relaxed. Continue to descend to the bottom squat position, which will help in the recovery. Immediately recover by driving through the heels, keeping the torso upright and elbows up. Continue until you have risen to a standing position. Return the weight to the boxes for the next rep.",
        }}
      />
    </div>
  );
}