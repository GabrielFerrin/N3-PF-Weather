import CompasPointer from "./CompasPointer"
import Forecast from "./Forecast"
import Hightlights from "./Hightlights"
import Meterbar from "./Meterbar"
import Units from "./Units"

function Main() {
  return (
    <div className="flex grow-1 p-8 w-full">
      <div className="flex flex-col justify-between max-w-[720px] mx-auto">
        {/* options */}
        <div className="w-full h-fit flex justify-end gap-3">
          <Units unit="C" isSelected={true} />
          <Units unit="F" isSelected={false} />
          <Units unit="K" isSelected={false} />
        </div>
        {/* forecast */}
        <div className="flex justify-center flex-wrap gap-7 pt-10">
          <Forecast date="Tomorrow" icon='shower.png' startTemp={15} endTemp={20} />
          <Forecast date="Sun, 7 Jun" icon='shower.png' startTemp={15} endTemp={20} />
          <Forecast date="Mon, 8 Jun" icon='shower.png' startTemp={15} endTemp={20} />
          <Forecast date="Tue, 9 Jun" icon='shower.png' startTemp={15} endTemp={20} />
          <Forecast date="Wed, 10 Jun" icon='shower.png' startTemp={15} endTemp={20} />
        </div>
        {/* hightlights */}
        <div className="flex flex-col gap-6 py-10">
          <h3 className="font-[700] text-[24px]">Today's Hightlights</h3>
          <div className="flex flex-wrap gap-7 justify-center">
            <Hightlights title='Wind status' value='7' scale='mph'>
              <CompasPointer />
            </Hightlights>
            <Hightlights title='Humidity' value='84' scale='%'>
              <Meterbar />
            </Hightlights>
            <Hightlights title='Visibility' value='6,4' scale=' miles' />
            <Hightlights title='Air pressure' value='998' scale=' mb' />
          </div>
        </div>
        {/* footer */}
        <footer className="w-full flex justify-center items-center text-[#88869D] font-[500] mt-10">
          <span>
            created by <span className="font-extrabold underline">Gabriel Ferrin</span> -
            <span> Funval</span>
          </span>
        </footer>
      </div>
    </div>
  )
}
export default Main