console.log(MythsList);

var Table = Reactable.Table,
    unsafe = Reactable.unsafe;

var bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};

var mythsinfo = [];
for (var i = 0; i < MythsList.length; i++) {
    var myth = {
      'Name': unsafe('<a href="/myths/' + MythsList[i].name.toLowerCase() + '">' + MythsList[i].name + '</a>'),
      'Description': unsafe(MythsList[i].description),
      'Theme': unsafe(MythsList[i].theme),
      'Place': unsafe(MythsList[i].place),
      'Gods': unsafe(MythsList[i].gods),
      'Characters': unsafe(MythsList[i].characters)
    };
    mythsinfo.push(myth);
}

ReactDOM.render(
  <div>
    <Table className="table" id="table" style={{backgroundColor: bgColors.Yellow}}

    data={mythsinfo}

    sortable={[
      {
          column: 'Name',
          sortFunction: function(a, b){
              // Sort by last name
              var nameA = a
              var nameB = b

              return nameA.localeCompare(nameB);
          }
      },
      'Description',
      'Theme',
      'Place',
      'Gods',
      'Characters'
    ]}

    filterable={['Name', 'Description', 'Theme', 'Place', 'Gods', 'Characters']}

    defaultSort={{column: 'Name', direction: 'asc'}} itemsPerPage={3} pageButtonLimit={100}/>
  </div>,
    document.getElementById('myths')
);
