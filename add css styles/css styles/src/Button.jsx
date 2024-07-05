// how to style react components with CSS
// .......................................
// (not including external frameworks or prepocessors)

// 1.external
// 2.modules
// 3.inline



function Button() {
    return (
        <>
        <div className="btn-container">
      <button className="btn-clickhere">Click here</button>
      <button className="btn-back">Back</button>
      </div>
      </>
    );
  }
  
  export default Button;
  