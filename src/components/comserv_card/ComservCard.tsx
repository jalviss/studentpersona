import { IStudent } from "../../interfaces/Student.interfaces"
import DoughnutChart from "../doughnut_chart/DoughnutChart"
import { IComservCard } from "./ComservCard.interfaces"

const ComservCard = (props: IComservCard) => {
  const { student } = props

  const handleOnViewHistory = () => {
    const redirectUrl = `https://acadservices.apps.binus.ac.id/newStudent/#/sat/studentActivity/communityService`;
    // window.location.href = redirectUrl;
    window.open(redirectUrl, '_blank')
  }

  return (
    <>
      {student &&
        <div className='w-7/12 h-[23.8rem] bg-white drop-shadow-lg rounded-3xl'>
          <p className="px-5 pt-5 font-bold text-3xl">Community Service Hours</p>
          <div className=" flex justify-center items-center flex-col gap-5">
            <div className="h-56 mt-4">
              <DoughnutChart value={student.comservHours} maxValue={30} />
            </div>
            <p className='text-[#0097DA] font-semibold text-2xl cursor-pointer mt-2' onClick={handleOnViewHistory}>View History</p>
          </div>
        </div>
      }
    </>
  )
}

export default ComservCard