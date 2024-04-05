import { FlatList, SafeAreaView } from "react-native"

import type { Delegates } from "../../../types"
import { DelegateItem } from "./_delegate-item"

interface ListOfDelegatesProps {
    delegates: Delegates
}

export const ListOfDelegates = ({ delegates }: ListOfDelegatesProps) => {
    return (
        <SafeAreaView>
            <FlatList
                data={delegates}
                keyExtractor={(delegate) => delegate.id as any}
                renderItem={({ item }) => <DelegateItem delegate={item} />}
            />
        </SafeAreaView>
    )
}