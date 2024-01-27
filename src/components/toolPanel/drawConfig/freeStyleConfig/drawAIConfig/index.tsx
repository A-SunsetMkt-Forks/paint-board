import useDrawStore from '@/store/draw'

const DrawAIConfig = () => {
  const { openAutoDraw, updateAutoDrawState } = useDrawStore()

  return (
    <div className="form-control mt-3">
      <div className="font-bold font-fredokaOne">AI</div>
      <div className="mt-1 flex items-start w-full">
        <a
          href="https://www.autodraw.com/"
          target="_blank"
          className="text-sm font-fredokaOne mr-2 shrink-0 link link-secondary cursor-pointer"
          rel="noreferrer"
        >
          Google AutoDraw
        </a>
        <input
          type="checkbox"
          className="toggle toggle-success toggle-sm"
          checked={openAutoDraw}
          onChange={updateAutoDrawState}
        />
      </div>
    </div>
  )
}

export default DrawAIConfig
