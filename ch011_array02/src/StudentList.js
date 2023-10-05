import React, { useRef, useState } from 'react';
import Student from './Students';
import CreateStudent from './CreateStudent';

function StudentList() {
    // 학생 배열 데이터 => 결과적으로 데이터가 계속 추가됨
    // 데이터가 계속 변경되는 것은 state로 사용
    const [students, setStudents] = useState([
        {
            id: '1',
            name: '김남준',
            age: 28,
            email: 'rm@gmail.com'
        },
        {
            id: '2',
            name: '김석진',
            age: 30,
            email: 'jin@gmail.com'
        },
        {
            id: '3',
            name: '민윤기',
            age: 29,
            email: 'suga@gmail.com'
        }
    ])

    // 증가될 아이디 번호를 고정 처리
    const nextId = useRef(4); // 현재는 3명 이어서 그 다음 번호로 처리

    // CreateStudent에서 추가할 값을 처리 - state로 관리
    // 입력 데이터 3개를 관리
    const [inputs, setInputs] = useState({
        name: '',
        age: '',
        email: ''
    });

    // state값 비구조화할당
    const { name, age, email } = inputs;

    // 폼데이터 변경 이벤트 함수 - setState
    const onDataChange = (e) => {
        // e.target의 비구조화할당 처리
        const { name, value } = e.target;
        setInputs({
            ...inputs, // 안 바뀌는 데이터는 그대로 복제
            [name] : value // 바뀌는 것의 값만 변경
        });
    }

    // 데이터 추가 함수 -  setState
    // 배열데이터 추가 시 push() 메서드 사용 X
    // concat() 메서드나 스프레드오퍼레이터로 사용
    // 기존배열명.concat(새로추가될값)
    // [...기존배열명, 추가값]
    const onCreate = () => {
        // 새로운 데이터를 담을 학생 한 명 변수 선언
        const student = {
            id: nextId.current,
            name, // name: name => 실제 작성 => ES6부터 한 번만 작성해도 인식
            age,
            email
        }
        setStudents([...students, student]); // 기본 배열 뒤에 새로운 학생데이터 추가
        // setStudents(students.concat(student));

        // 버튼을 클릭하면 입력상자 데이터 비움
        setInputs({
            name: '',
            age: '',
            email: ''
        });

        //nextId의 값이 1 증가
        nextId.current += 1; // 다음 학생도 추가될 수 있으니 id값도 1 증가
    }

    // 데이터 삭제 관련 이벤트 함수 - setState
    // filter() : 조건에 맞는 배열만 재반환하는 메서드
    // 삭제 관련으로 key인 id가 꼭 필요, 다른 데이터를 삭제하면 안 되기 때문
    const onRemove = id => {
        // 매개변수로 지정된 id값이 student.id와 같지 않은 것만 새롭게 배열 처리
        // id값이 student.id와 같은 것만 삭제
        setStudents(students.filter(student => student.id !== id));
    }


    // UpdateStudent에서 변경될 값을 처리 - state로 관리
    // 입력 데이터 3개를 관리
    const [inputs2, setInputs2] = useState({
        name: '',
        age: '',
        email: ''
    });

    // 폼데이터 변경 이벤트 함수 - setState
    const onDataChange2 = (e) => {
        // e.target의 비구조화할당 처리
        const { name, value } = e.target;
        setInputs2({
            ...inputs2, // 안 바뀌는 데이터는 그대로 복제
            [name] : value // 바뀌는 것의 값만 변경
        });
    }

    // 변경 완료 이벤트
    const onCompleteClick = id => { // 특정 id의 데이터만 변경
        // 업데이트 할 데이터를 담는 객체 선언
        const student = {
            id: id, // 기존 id 그대로 반환
            name: inputs2.name, // name: name => 실제 작성 => ES6부터 한 번만 작성해도 인식
            age: inputs2.age,
            email: inputs2.email
        }

        // 해당 id의 해당하는 데이터는 삭제하고 시작, student를 추가, id의 순서에 맞게 sort정렬
        // filter메서드 쓰고, concat메서드 쓰고, sort메서드 까지 메서드 체이닝 처리
        // 메서드().메서드().메서드() => 메서드 체이닝
        setStudents(
            students
                .filter((student) => student.id !== id)
                .concat(student)
                .sort((a, b) => { // 숫자든 문자든 오름차순 정렬
                    if (a.id > b.id) return 1;
                    if (a.id < b.id) return -1;
                    return 0;
                })
        );

        // 입력값을 빈 문자열 처리
        setInputs2({
            name: '',
            age: '',
            email: ''
        });
    }

    return (
        <div>
            <CreateStudent
                name={name}
                age={age}
                email={email}
                onDataChange={onDataChange}
                onCreate={onCreate}
            />
            {students.map(student => <Student student={student} key={student.id} onRemove={onRemove} onDataChange2={onDataChange2} onCompleteClick={onCompleteClick} /> )}
        </div>
    );
}

export default StudentList;