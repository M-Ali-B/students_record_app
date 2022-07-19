
export class Utility {

  public formatDbData(data): string {

    let format = '';

    data.forEach(item => {
      format += 'Student Name =>  ' + (item['name'] || []) +
        ',Father Name =>  ' + (item['fname'] || []) +
        ',Class =>  ' + (item['class'] || []) +
        ',Cell # =>  ' + (item['phone'] || []) + ' \n';
    });

    return format;
  }


}
