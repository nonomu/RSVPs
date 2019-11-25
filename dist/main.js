const render = new Renderer()
const temp = new TempManager()

const loadPage = async function () {
    await temp.getDataFromDB()
    render.renderData(temp.cityData)
}
loadPage()


$(".button_cont").on("click",async function () {
    console.log("hello");
    let firstName = $("#firstName").val()? $("#firstName").val(): false
    let lastName =$("#lastName").val() ? $("#lastName").val(): false
    let adultsNum= $("#adultsNum").val() ? $("#childrenNum").val() : false
    let childrenNum= $("#childrenNum").val() ? $("#childrenNum").val() : false
    let familypprove={
        name: firstName,
        familyName: lastName,
        adultsNumber: adultsNum,
        kidsNumber : childrenNum
    }
    if(!firstName || !lastName || !adultsNum || !childrenNum)
    {
        alert("בבקשה מלא את כל הנתונים")
    
        return
    }
    console.log(familypprove)
    
    await $.post('/save/', familypprove)
    console.log("saved");
    alert("אושר בהצלחה")
    $("#firstName").val("")
    $("#adultsNum").val("")
    $("#lastName").val("")
    $("#childrenNum").val("")
})