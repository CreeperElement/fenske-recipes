import React, { ReactNode, useState } from 'react';
import { Form, FormGroup, Tab, Tabs } from 'react-bootstrap';

export interface ISearchBarProps {
    children: ReactNode | ReactNode[];
}

interface RecipeCategory {
    eventKey: string;
    title: string;
}
const RecipeCategories: RecipeCategory[] = [
    {eventKey: "all", title: "All"},
    {eventKey: "entree", title: "Entrées"},
    {eventKey: "dessert", title: "Desserts"},
    {eventKey: "drink", title: "Drinks"},
    {eventKey: "soup", title: "Soups"},
    {eventKey: "side", title: "Sides"},
    {eventKey: "mine", title: "Mine"}
];

export default class SearchBar extends React.Component<ISearchBarProps> {
    constructor(props: ISearchBarProps) {
        super(props);
    }

    render() {
        return (
            <Tabs>
                {RecipeCategories.map(recipeCategory =>
                    <Tab eventKey={recipeCategory.eventKey} title={recipeCategory.title}>
                        {this.recipeCategory(recipeCategory)}
                    </Tab>
                )}
            </Tabs>
        );
    }

    recipeCategory(recipeCategory: RecipeCategory): ReactNode {
        const { eventKey } = recipeCategory;
        return (
            <Form>
                {this.props.children}
            </Form>
        );
    }

}